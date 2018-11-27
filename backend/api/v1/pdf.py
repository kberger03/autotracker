import json
import csv
import os
from flask import request, make_response, jsonify, send_file
from backend import app
from backend.api.v1 import URL

@app.route(URL + '/export', methods=['POST'])
def getPDF():
    parsed = request.get_json(force=True)
    # data = '[{"date":"Wed, 17 Oct 2018 00:00:00 GMT","id":8,"mechanic":"Thomas","mtype":"Oil Change","vehicleId":5,"vuserId":3,"nickname":"Avery"},{"date":"Mon, 12 Nov 2018 00:00:00 GMT","id":9,"mechanic":"Jordan","mtype":"Tire Rotation","vehicleId":6,"vuserId":3,"nickname":"Night Rider"},{"date":"Fri, 21 Jul 2017 00:00:00 GMT","id":10,"mechanic":"Thomas","mtype":"Tire Rotation","vehicleId":5,"vuserId":3,"nickname":"Avery"}]'
    #parsed = json.loads(data)
    # open a file for writing
    history = open('history.csv', 'w')
    # create the csv writer object
    csvwriter = csv.writer(history)
    count = 0
    for rec in parsed:
        if count == 0:
            header = rec.keys()
            csvwriter.writerow(list(header))
            count += 1
        csvwriter.writerow(list(rec.values()))
    history.close()
    return make_response(jsonify('Success'), 200)

@app.route(URL + '/downloads', methods=['GET'])
def download():
    return send_file('/vagrant/history1.csv', attachment_filename='history.csv', cache_timeout=-1)