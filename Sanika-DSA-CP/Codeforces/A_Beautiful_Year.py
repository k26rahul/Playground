year = int(input())

# Initialize the beautiful_year with the input year
beautiful_year = year

# Flag to track if a beautiful year is found
found = False

# Loop until a beautiful year is found
while not found:
  # Increment beautiful_year
  beautiful_year += 1

  # Check if all digits in beautiful_year are distinct
  if len(set(str(beautiful_year))) == 4:
    found = True

# Print the beautiful_year
print(beautiful_year)
