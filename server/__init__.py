from flask import Flask
from server.constants import CONSTANTS
from server.controllers.abc import DatabaseDriver
from server.controllers.mongo import MongoDriver
from server.controllers.firestore import FirestoreDriver
import logging

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__, static_folder='build')

db: DatabaseDriver = None

if CONSTANTS['DB_TYPE'] == 'mongo':
    logging.warning('DB type is local, using Mongo driver.')
    logging.warning('Do not use this in production!!')
    db = MongoDriver(
        app,
        CONSTANTS['DB_HOST'],
        CONSTANTS['DB_PORT'],
        CONSTANTS['DB_USERNAME'],
        CONSTANTS['DB_PASSWORD']
    )

if CONSTANTS['DB_TYPE'] == 'firestore':
    db = FirestoreDriver(
        CONSTANTS['DB_USERNAME'],
        CONSTANTS['DB_PASSWORD']
    )
