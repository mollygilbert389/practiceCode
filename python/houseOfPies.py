shopping = "y"

pie_purchases = [0,0,0,0,0,0,0,0,0,0]

pie_list = ["Pecan", "Apple Crisp", "Bean", "Banoffee", "Black Bun", "Blueberry", "Buko", "Burel", "Tamale", "Lemon"]

print("Welcome to the house of Pies! Here are our pies!: ") 
while shopping == "y":

    print("---------------------------------------------------------")
    print("(1) Pecan, (2) Apple Crisp, (3) Bean, (4) Banoffee, " + 
                        "(5) Black Bun, (6) Blueberry, (7) Buko, (8) Burek, " +
                        "(9) Tamale, (10) Lemon " )

    pie_choice = input("Which would you like?")

    pie_purchases[int(pie_choice) -1] +=1

    print("---------------------------------------------------------")

    print("Great! We'll gave that " + pie_list[int(pie_choice) -1] + " right out for you.")

    shopping = input("Would you like to make another purchase: (y)es or (n)o?")

print("---------------------------------------------------------")
print("You purchased: ")

for pie_index in range(len(pie_list)): 

    print(str(pie_purchases[pie_index]) + " " + str(pie_list[pie_index]))

