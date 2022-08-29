from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/login", methods=['GET', 'POST'])
def hello_world():
    dictionnaire = {
        'nom': "france",
        'id': 1,
        'data': [12.5, 45, 0,48]
    }
    return jsonify(dictionnaire)