from flask import request, make_response, jsonify

from backend import app
from backend.api.v1 import URL
from backend.models import User


# @app.route(URL + '/<user>', methods=['GET'])
# def getId(user):
#     app.logger.info(login)
#     #user = User.query.filter_by(username=login).first()
#     # user = User.query.filter_by(username=username).first()
#     app.logger.info(username)
#     # if username:
#         # return user.id

@app.route(URL + '/<user>', methods=['GET'])
def getId(user):
        user = User.query.filter_by(username=user).first()
        jsonUser = {}
        jsonUser['id'] = user.id
        jsonUser['name'] = user.name
        jsonUser['email'] = user.email
        jsonUser['username'] = user.username

        return make_response(jsonify(jsonUser), 200)