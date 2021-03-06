## 二叉树的深度

[136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

两个一样的数做异或操作后是 0 ，所以把数组中所有数做一下异或操作，最后的结果就是只出现了一次的那个数。

[137. 只出现一次的数字 II](https://leetcode-cn.com/problems/single-number-ii/)

呃，所有数的二进制值都一一对应加起来，然后除以 3 的余数就是只出现了一次的数。

[260. 只出现一次的数字 III](https://leetcode-cn.com/problems/single-number-iii/)

假设这两个只出现了一次的数字是 a 和 b 。那么如果我们能把原始数组分成两部分，一部分包含 a ，另一部分包含 b ，那么就能直接用第一个题的解法去解了。

对于 a 和 b 的二进制值中，至少有一个位置 a 和 b 中一个是 0 一个是 1 ，那么我们把所有数字按照二进制值中这个位置是 0 还是 1 分成两部分即可。

插播一个位运算的小技巧，对于一个数 x 来说， `x & -x` 的结果，就是恰好只含一个 1 的值。比如 x 对应的二进制值是 `01001100`，那么 -x 对应的二进制反码是 `10110011`，补码是 `10110100` ，然后 x 和 -x 按位与操作后是 `00000100` ，发现没有，就刚好只包含一个 1 。（在做位操作之前，需要把数转为补码，然后再做位操作。负数的补码就是对应的正数取反后加一）

所以，我们首先把所有数字做异或操作，得到的结果就是 a 和 b 的异或，然后把这个值和它的相反数做与操作，拿到一个二进制值只包含 1 的数。然后将每个数和这个数做与操作，根据结果是不是为 0 把原始数组可以分为两部分。
