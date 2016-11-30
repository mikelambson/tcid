import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;
from components.validation import validate_word;

class Owner_irrigators(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	name = DB.Column(DB.Integer(20));
	notation = DB.Column(DB.Text);
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'), nullable=True);
	updated_at = DB.Column(DB.DateTime, nullable=True);

"""	@validates('subject')
	def validate_subject(self, key, subject):
		return validate_word(subject, 2, 320, valid=re.compile('[a-zA-Z\s]+'))
"""
	def __init__(self, name, notation, created_at, updated_at):
		self.name = name;
		self.notation = notation;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

"""	def serialize(self, session):
		if session.clearance:
			return {"id": self.id, "subject": self.subject, "deleted_by": self.deleted_by, "created_by": self.created_by, "created_at": self.created_at.strftime("%B %d, %Y %H:%M:%S"), "updated_at": self.updated_at.strftime("%B %d, %Y %H:%M:%S"), "updated_by": self.updated_by};
		else: #public or protected
			return {"delete": self.id} if self.deleted_by else {"id": self.id, "subject": self.subject};

	@staticmethod
	def create(args, secure):
		auth = DB.Models["sessions"].authenticate(secure, paranoid=True, role="admin");
		if auth.success == False:
			return auth.serialize();
		else:
			security_question = SecurityQuestions(args["subject"], auth.session.user);
			DB.session.add(security_question);
			DB.session.commit();
			return {"success": True};

	@staticmethod
	def exists(prop, value): 
		if prop == "subject": 
			return True if SecurityQuestions.query.filter_by(subject=value).count() else False;
		else: 
			return False;#invalid property

	@staticmethod
	def request(mode, secure):
		auth = DB.Models["sessions"].authenticate(secure, bypass_activation=True);
		if auth.success == False:
			return auth.serialize();
		cache = DB.Models["caches"].cache("security_questions", mode, auth.session, False);
		if mode == "config": 
			data = [i.serialize(auth.session) for i in SecurityQuestions.query.filter(SecurityQuestions.updated_at > cache).all()] if cache else [i.serialize(auth.session) for i in SecurityQuestions.query.all()];
		elif mode == "index": #public 
			data = [i.serialize(auth.session) for i in SecurityQuestions.query.filter(SecurityQuestions.updated_at > cache, SecurityQuestions.deleted_by == None).all()] if cache else [i.serialize(auth.session) for i in SecurityQuestions.query.all()];
		else: #login
			data = [i.serialize(auth.session) for i in SecurityQuestions.query.filter(SecurityQuestions.updated_at > cache, SecurityQuestions.deleted_by == None, SecurityQuestions.id == auth.session.user.security_question.id).all()] if cache else [i.serialize(auth.session) for i in SecurityQuestions.query.filter_by(id = auth.session.user.security_question.id).all()];
		return {"success": True, "items": len(data), "data": data};

	@staticmethod
	def update(args, secure):
		auth = DB.Models["sessions"].authenticate(secure, paranoid=True, role="admin");
		if auth.success == False:
			return auth.serialize();
		else:
			security_question = SecurityQuestions.query.get(args["id"]);
			for param, value in args.iteritems():
				if param == "subject":
					security_question.subject = value;
				elif param == "deleted_by":
					security_question.deleted_by = auth.session.user if value == True else None;
			security_question.updater = auth.session.user;
			security_question.updated_at = datetime.datetime.now();
			DB.session.commit();
			return {"success": True};
"""			
