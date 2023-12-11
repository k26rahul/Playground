msg = input()

# Initialize the 'found' flag to False
found = False

# Iterate through each character in the message
for char in msg:
  # Check if the character is in the set 'HQ9'
  if char in 'HQ9':
    # Set 'found' to True and break out of the loop
    found = True
    break

# Check if 'found' is True and print the result accordingly
if found:
  print('YES')
else:
  print('NO')
