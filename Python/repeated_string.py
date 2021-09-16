#
# Complete the 'repeatedString' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. STRING s
#  2. LONG_INTEGER n
#

def repeatedString(s, n):
    # Write your code here
    total_a = s.count('a')
    diff_a = 0
    if(len(s) > 1 and n > 1):
        difer = n / len(s)
        if(isinstance(difer, int)):
            return total_a*difer
        else:
            calc = len(s) * int(difer)
            dif_tam = n - calc

            if dif_tam != 0:
                diff_a = s[0:dif_tam].count('a')

            return (total_a * int(difer)) + diff_a
    else:
        if s.count('a') > 0:
            return n
        else:
            return 0


if __name__ == '__main__':
    s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'

    n = 736778906400

    result = repeatedString(s, n)
    # o Resultado desse case deve ser 51574523448
    print(result)


# kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm

# 736778906400

# 51574523448
