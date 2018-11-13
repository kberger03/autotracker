from flask import request, make_response, jsonify

from backend import app
from backend.api.v1 import URL
from backend.models import User, Vehicle


# @app.route(URL + '/<vehicle>', methods=['GET'])
# def getUserVehicles(vehicle):
#     app.logger.info(login)
#     #user = User.query.filter_by(username=login).first()
#     # user = User.query.filter_by(username=username).first()
#     app.logger.info(username)
#     # if username:
#         # return user.id

@app.route(URL + '/getveh/<userId>', methods=['GET'])
def getUserVehicles(userId):
        vehicle = User.query.filter_by(userId=vehicle.userId).first()
        jsonVehicle = {}
        jsonVehicle['id'] = vehicle.id
        jsonVehicle['make'] = vehicle.make
        jsonVehicle['model'] = vehicle.model
        jsonVehicle['year'] = vehicle.year
        jsonVehicle['color'] = vehicle.color
        jsonVehicle['pdriver'] = vehicle.pdriver
        jsonVehicle['nickname'] = vehicle.nickname

        return make_response(jsonify(jsonVehicle), 200)