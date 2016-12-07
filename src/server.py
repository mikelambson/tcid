#Import flask libraries
import json, re, os, datetime, logging;#Import general libraries
from flask import Flask, jsonify, request, render_template, send_from_directory;
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
                       
@FlaskServer.route('/')
def index():
	return render_template('index.html');

@FlaskServer.route('/assets/<path:resource>')
def serveStaticResource(resource):# Serves misc. resources: css, js.
  return send_from_directory('assets/', resource); 

#@FlaskServer.route('/app/<path:app>')
#def serveAppResource(app):
#	return send_from_directory('app/', app);

if __name__ == "__main__":
    FlaskServer.run(host="0.0.0.0", port=int("3000"), debug=True);
