def number_title(level, counters=[]):
    if len(counters) == 0:
        counters = [0] * level

    # 해당 레벨 카운터 증가
    counters[level - 1] += 1
    # 하위 레벨 카운터 초기화
    for i in range(level, len(counters)):
        counters[i] = 0
    # 번호 문자열 생성
    numbers = [str(counters[i]) for i in range(level) if counters[i] > 0]
    return ".".join(numbers)


if __name__ == "__main__":

    MAX_LEVEL = 5
    counters = [0] * MAX_LEVEL

    with open("readme.md", "r") as f:
        cont = f.readlines()

    numbering_cont = []

    for c in cont:
        if c.startswith("#"):
            level = c.count("#")
            numbering = number_title(level=level, counters=counters)
            prefix = "#" * level
            suffix = c[level + 1 :]
            numbering_cont.append(f"{prefix} {numbering} {suffix}")
        else:
            numbering_cont.append(c)

    with open("README_WITH_NUMBERING.md", "w") as f:
        f.writelines(numbering_cont)
