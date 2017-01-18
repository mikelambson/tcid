#Import flask libraries
import json, re, os, datetime, logging;#Import general libraries
from flask import Flask, jsonify, request, render_template, send_from_directory, redirect;
from flask_socketio import SocketIO, send, emit, join_room, leave_room, close_room;
from flask_mail import Mail, Message;
from flask_socketio import join_room;
from flask_sqlalchemy import SQLAlchemy;
from sqlalchemy import create_engine;#Engine handler
#from PIL import Image;
#from logging.handlers import RotatingFileHandler;
#from logging import Formatter;
#import environment, recorder;#Import custom libraries
FlaskServer = Flask(__name__);#Dynamic web server
Interactive = SocketIO(FlaskServer);#Socket handler
#FlaskServer.config.from_object(os.getenv("SERVER_ENV") if os.getenv("SERVER_ENV") else "environment.Testing");
Mailer = Mail(FlaskServer);#Mail handler
DB = SQLAlchemy(FlaskServer);#Sqlalchemy database handler
import models;
engine = create_engine('mysql://tcid:tcid@localhost/tcid?charset=utf8mb4_unicode_520_ci')
                       
@FlaskServer.route('/', defaults={"resource": ""}, methods=['GET'])
@FlaskServer.route('/<path:resource>', methods=['GET'])
def page(resource):
	if component(resource.split("/")):#path is valid
		return render_template('index.html');
	else:#routing is invalid
		return render_template('404.html'), 404; 

@FlaskServer.route('/components/<path:resource>', methods=['GET'])
def component_template(resource):
	return render_template('components/{}'.format(resource));

@FlaskServer.route('/assets/<path:resource>')
def serveStaticResource(resource):# Serves misc. resources: css, js.
  return send_from_directory('assets/', resource); 

def component(path):
	if path[0] == "":
		return True;#default index
	if not os.path.exists("templates/components/{}.html".format(path[0])):
		return False;#template does not exist
	else: 
		return True;
"""
@FlaskServer.route('/schedule', methods=['GET'])
def schedule(name):
	#some kind of authentication
	#if auth.success == False:
	#	return jsonify(auth.serialize()), 401;
	if request.method == 'GET':# recover a username
		#interact with one of your models
		#have that model query the database
		#return a jsonified version (see sample below)
		return jsonify(["stuff", "more stuff", "most stuff"]);
"""
if __name__ == "__main__":
    FlaskServer.run(host="0.0.0.0", port=int("3000"), debug=True);
