username = input()

# Calculate the set of distinct characters in the username
distinct_characters = set(username)

# Determine the result based on the number of distinct characters
result = "CHAT WITH HER!" if len(
    distinct_characters) % 2 == 0 else "IGNORE HIM!"

# Print the result
print(result)
