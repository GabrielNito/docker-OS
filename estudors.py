def str_hash(text: str, seed: int):
    result = 0
    for c in text:
        result += ord(c)

    result *= seed
    return result


class HashMap:
    def __init__(self, tamanho=300, seed=53):
        self.tamanho = tamanho
        self.valores = [None] * tamanho
        self.seed = seed

    def set_value(self, key: str, value: any):
        key_hash = str_hash(key, self.seed) % self.tamanho
        self.valores[key_hash] = value
        pass

    def get_value(self, key: str):
        key_hash = str_hash(key, self.seed) % self.tamanho
        return self.valores[key_hash]


def main():
    hmap = HashMap()
    hmap.set_value("1", "sla")
    print(hmap.get_value("1"))


if __name__ == '__main__':
    main()
