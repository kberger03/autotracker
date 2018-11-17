from flask import request, make_response, jsonify

from backend import app
from backend.api.v1 import URL
from backend.models import Active


# @app.route(URL + '/<vehicle>', methods=['GET'])
# def getUserVehicles(vehicle):
#     app.logger.info(login)
#     #user = User.query.filter_by(username=login).first()
#     # user = User.query.filter_by(username=username).first()
#     app.logger.info(username)
#     # if username:
#         # return user.id

@app.route(URL + '/getact/<vuserId>', methods=['GET'])
def getUserActives(vuserId):
        actives = Active.query.filter_by(vuserId=vuserId).all()
        response={}
        response['objects']=[]
        for active in actives:
                jsonActive = {}
                jsonActive['id'] = active.id
                jsonActive['vehicleId'] = active.vehicleId
                jsonActive['vuserId'] = active.vuserId
                jsonActive['mtype'] = active.mtype
                jsonActive['date'] = active.date
                jsonActive['mechanic'] = active.mechanic
                response['objects'].append(jsonActive)

        return make_response(jsonify(response), 200)