import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Laterals(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	name = DB.Column(DB.String(20));
	lateral_location = DB.Column(DB.Text, nullable=True);
	location_gps = DB.Column(DB.Text, nullable=True);
	metered = DB.Column(DB.Boolean);
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, name, lateral_location, location_gps, metered, created_at,updated_at):
		self.lateral_location = lateral_location;
		self.location_gps = location_gps;
		self.metered = metered;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

