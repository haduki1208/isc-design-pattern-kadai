class Renban:
    _instance = None
    _number = 1

    def __new__(self):
        if self._instance is None:
            self._instance = object.__new__(self)
        return self._instance

    @classmethod
    def get_instance(self):
        if self._instance is None:
            self._instance = Renban()
        return self._instance

    def getNumber(self) -> str:
        if self._number > 9999:
            raise OverflowError("番号は 1 ～ 9999 まで発行されます。")
        numStr = str(self._number)
        self._number += 1
        return numStr.zfill(4)


class SingletonTest:
    @classmethod
    def main(self):
        renban = Renban.get_instance()
        print(renban.getNumber())
        renban = Renban.get_instance()
        print(renban.getNumber())

        renban = Renban()
        print(renban.getNumber())
        renban = Renban()
        print(renban.getNumber())


if __name__ == "__main__":
    SingletonTest.main()
