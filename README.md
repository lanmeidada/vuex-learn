# 该阶段为中阶段，对应分支为1.2

## 多模块的作用

vuex 支持每个模块定义自己的state、mutations、actions和getters

## 模块的命名空间作用

- namespaced 命名空间
- 因为 mutations、actions、getters 没有绑定到模块上，
- 所以当每个模块存在相同的 mutations、actions、getters 的属性时，会一起改变
- 但是加入命名空间后，可以解决这个问题
- 实例：
- $store.commit('a/addCount')