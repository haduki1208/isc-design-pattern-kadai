import unittest
from main import Renban


class TestRenban(unittest.TestCase):
    def test_singleton(self):
        value1 = Renban.get_instance()
        value2 = Renban.get_instance()
        self.assertEqual(value1, value2)

    def test_getNumber(self):
        renban = Renban.get_instance()
        expected = renban.getNumber()
        actual = "0001"
        self.assertEqual(expected, actual)

        expected = renban.getNumber()
        actual = "0002"
        self.assertEqual(expected, actual)

        expected = renban.getNumber()
        actual = "0003"
        self.assertEqual(expected, actual)

    def test_overflow_number(self):
        with self.assertRaises(OverflowError) as error:
            renban = Renban.get_instance()
            for i in range(10000):
                renban.getNumber()
        exceptionMsg = error.exception.args[0]
        self.assertEqual(exceptionMsg, "番号は 1 ～ 9999 まで発行されます。")


if __name__ == "__main__":
    unittest.main()
