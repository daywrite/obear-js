// @flow
/**
 * 表单验证类
 */
const reg = {
  /**
   * 整数验证，包括负数、0、正数
   * @param {Object} str 输入参数
   * @return {Boolean}
   */
  isIngeter (str : string) : boolean {
    if (typeof str === 'boolean' || str === null) return false

    return Number.isInteger(Number(str))
  },

  /**
   * 正整数验证
   * @param  {Object} str 输入参数
   * @return {Boolean}
   */
  isPositiveInteger (str : string) : boolean {
    return /^\+?(?:0|[1-9]\d*)$/g.test(str)
  }
}

export default reg
