## 最长不含重复字符的子字符串

[3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

假设 f(i) 是以第 i 个字母结尾的最长不含重复字符的子字符串长度。

假设字符串为 s 。

然后我们来推导 f(i+1) 和 f(i) 的关系。

如果说 s[i+1] 和上一次该字符串出现位置的距离是 d 。

如果 d > f(i) ，说明 s[i+1] 不存在于 f(i) 对应的最长子串中，那么 f(i+1) = f(i) + 1 。

如果说 d ≤ f(i) ，说明 s[i+1] 存在于 f(i) 对应的最长子串中，那么 f(i+1) = d 。

这样所有的 f(i) 中的最大的那个就是我们要的结果了。
