import warnings
import sys

# Filter out specific warnings
# Example: Suppress DeprecationWarning
warnings.filterwarnings("ignore", category=DeprecationWarning)

# Redirect warnings to a file (optional)
# Uncomment the following lines if you want to redirect warnings to a file
# with open("warnings.log", "w") as warning_file:
#     warnings.showwarning = lambda message, category, filename, lineno, file=warning_file, line=None: file.write(warnings.formatwarning(message, category, filename, lineno, line))

# Import and run the main script
if __name__ == "__main__":
    sys.argv.pop(0)  # Remove the name of this script from sys.argv
    exec(open(sys.argv[0]).read(), globals())

