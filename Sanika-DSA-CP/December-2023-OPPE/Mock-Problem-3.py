import os

# Get the path of the current script
script_path = os.path.realpath(__file__)

# Get the directory containing the script
script_directory = os.path.dirname(script_path)

# Set the current working directory to the script's directory
os.chdir(script_directory)

# Now the current working directory is set to the folder containing the script
# g directory is set to the folder containing the script


def improvement(filename):
  lines = open(filename, 'r').read().split('\n')[1:]
  data = [line.split(',') for line in lines]
  count = 0
  for row in data:
    ct_score = int(row[2])
    python_score = int(row[3])
    pdsa_score = int(row[4])

  if ct_score < python_score < pdsa_score:
    count += 1

    return count


result = improvement('Oppe_2MockProblem_3.csv')
print(result)
