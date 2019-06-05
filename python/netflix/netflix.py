import csv

video = input("What show or movie are you looking for?")

csvpath = "Resources/netflix.csv"

found = False

with open(csvpath, newline="") as csvfile: 
    csvreader = csv.reader(csvfile, delimiter=",")

    for row in csvreader: 
        if row[0] == video: 
            print(row[0] + " is rated " + row[1] + " with a rating of " + row[6] + ".")

            found = True
    
    if found == False: 
        print("Sorry we don't have that in our database.")