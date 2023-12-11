# Get the names of the host and the guest, and the pile of letters from the user
host_name = input()
guest_name = input()
pile_of_letters = input()

# Concatenate the expected letters from the host and the guest
expected_letters = host_name + guest_name

# Check if the sorted expected letters match the sorted pile of letters
result = "YES" if sorted(expected_letters) == sorted(pile_of_letters) else "NO"

# Print the result
print(result)
