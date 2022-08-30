from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/login", methods=['GET'])
def hello_world():
    dictionnaire = {
        'nom': "france",
        'id': 1,
        'data': [12.5, 45, 0,48],
        'status': 'Vous êtes connecté !',
    }
    return jsonify(dictionnaire)


if __name__ == "__main__":
    app.run(debug=True)