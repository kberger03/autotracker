from flask import request, make_response, jsonify

from backend import app
from backend.api.v1 import URL
from backend.models import User


@app.route(URL + '/auth', methods=['POST'])
def authentication():
    """
    Authenticates a user and sends a JWT.
    Request Example:
    POST
    {
        login    : 'username' or 'email address'
        password : 'password'
    }
    """
    data      = request.get_json(force=True)
    login     = data.get('login', None)
    password  = data.get('password', None)
    criterion = [login, password, len(data) == 2]

    if not all(criterion):
        return make_response('Bad Request', 400)

    user = User.query.filter_by(username=login).first()

    if user is None:
        user = User.query.filter_by(email=login).first()

    if user and user.check_password(password):
        return make_response(jsonify('Success'), 200)
    else:
        return make_response(jsonify('Unauthenticated'), 401)