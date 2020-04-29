## 序列化二叉树

[LeetCode 面试题 37. 序列化二叉树](https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/)

序列化的数据格式可以参见 [请问 1, null, 2, 3 在二叉树测试用例中代表什么 - 力扣（LeetCode） - 支持](https://support.leetcode-cn.com/hc/kb/article/1194353/) 。

按每一层结点去做递归就好了，先处理第一层结点，再处理第二层结点这样。
