# Replacing %+f, %-f, and % f and specifying a sign
# show it always
print('{:+f}; {:+f}'.format(3.14, -3.14))
# show a space for positive numbers
print('{: f}; {: f}'.format(3.14, -3.14))
# show only the minus -- same as '{:f}; {:f}'
print('{:-f}; {:-f}'.format(3.14, -3.14))
