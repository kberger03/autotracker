import json
import csv

data = '[{"date":"Wed, 17 Oct 2018 00:00:00 GMT","id":8,"mechanic":"Thomas","mtype":"Oil Change","vehicleId":5,"vuserId":3,"nickname":"Avery"},{"date":"Mon, 12 Nov 2018 00:00:00 GMT","id":9,"mechanic":"Jordan","mtype":"Tire Rotation","vehicleId":6,"vuserId":3,"nickname":"Night Rider"},{"date":"Fri, 21 Jul 2017 00:00:00 GMT","id":10,"mechanic":"Thomas","mtype":"Tire Rotation","vehicleId":5,"vuserId":3,"nickname":"Avery"}]'
parsed = json.loads(data)
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