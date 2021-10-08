## Problem Hackerrank - Day 10: Binary Numbers

def CalcSequenceBin(n_bin):
    sequence = 0
    constrol_s = 0

    for i in n_bin:
        if i == '1':
            constrol_s += 1
        else:
            if constrol_s != 0 and constrol_s != 1:
                sequence = constrol_s
                constrol_s = 0
            else:
                constrol_s = 0

    if sequence == 0 and constrol_s > 0 and constrol_s != 1:
        sequence = constrol_s

    if constrol_s > sequence:
        sequence = constrol_s

    print('1') if sequence == 0 else print(sequence)


def ConvertToBinary(n):
    n_bin = "{0:b}".format(n)
    print('Número binário => ', n_bin)
    CalcSequenceBin(str(n_bin))


if __name__ == '__main__':
    n = 951
    ConvertToBinary(n)
