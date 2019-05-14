class Renban:
    _instance = None
    _number = 1

    """
    __new__ は コンストラクタ、get_instanceでシングルトンできる
    __init__ はget_instanceでシングルトンできる
    """

    def __init__(self):
        if self._instance is None:
            self._instance = object.__init__(self)
        return self._instance
    # def __new__(self):
    #     if self._instance is None:
    #         self._instance = object.__new__(self)
    #     return self._instance

    @classmethod
    def get_instance(self):
        if self._instance is None:
            self._instance = Renban()
        return self._instance

    def getNumber(self) -> str:
        numStr = str(self._number)
        self._number += 1
        return numStr.zfill(4)


class SingletonTest:
    @classmethod
    def main(self):
        """
        __new__ でシングルトンする場合、以下のコードは正常に動作する
        __init__ でシングルトンする場合、以下のコードはエラーを吐く
        """
        renban = Renban.get_instance()
        print(renban.getNumber())
        renban = Renban.get_instance()
        print(renban.getNumber())
        renban = Renban.get_instance()
        print(renban.getNumber())
        # renban = Renban()
        # print(renban.getNumber())
        # renban = Renban()
        # print(renban.getNumber())
        # renban = Renban()
        # print(renban.getNumber())


if __name__ == "__main__":
    SingletonTest.main()
