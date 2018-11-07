<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp; </el-col>
      <el-col :xs="24" :sm="22" :md="18" :lg="14" :xl="12">
        <div class="article_title">跨境电商综合税说明</div>
        <div class="article_time">洋来了跨境商城 / 2018-08-21</div>
        <div class="article_content">
          <p> 根据跨境电子商务零售进口税收政策，个人单笔交易限值人民币2000元，个人年度交易限值人民币20000元。在限值以内进口的跨境电子商务零售进口商品，关税税率暂设为0%；进口环节增值税、消费税按法定应纳税额的70%征收。计算规则如下：</p>
          <p>税费 = 购买单价 × 件数 × 跨境电商综合税率</p>
          <p>跨境电商综合税率 =（消费税率 + 增值税率）/（1 - 消费税率）× 70%</p>
          <p>注：运费需缴纳税费，税费为代征代缴，如因个人原因退货，税费将不予返还。</p>
          <table class="taxrateTb" border="0" cellspacing="0" cellpadding="0" style="margin: 10px auto; color: rgb(102, 102, 102); width: 810px; border-collapse: collapse; font-size: 14px; line-height: 28px; border-width: 0px; border-color: grey; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, 微软雅黑, tahoma, simsun, 宋体;">
            <tbody>
              <tr>
                <th colspan="2" rowspan="2" style="background: rgb(247, 247, 247); border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">类目</span>
                  </p>
                </th>
                <th colspan="2" style="background: rgb(247, 247, 247); border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">一般贸易税（&nbsp;
                      <span style="margin: 0px; padding: 0px;">%&nbsp;</span>）</span>
                  </p>
                </th>
                <th style="background: rgb(247, 247, 247); border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">跨境电商综合税（&nbsp;
                      <span style="margin: 0px; padding: 0px;">%&nbsp;</span>）</span>
                  </p>
                </th>
              </tr>
              <tr>
                <th style="background: rgb(247, 247, 247); border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">增值税率</span>
                  </p>
                </th>
                <th style="background: rgb(247, 247, 247); border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">消费税率</span>
                  </p>
                </th>
                <th style="background: rgb(247, 247, 247); border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">（消费税率&nbsp;
                      <span style="margin: 0px; padding: 0px;">+&nbsp;</span>增值税率）&nbsp;
                      <span style="margin: 0px; padding: 0px;">/&nbsp;</span>（1 - 消费税率）×&nbsp;
                      <span style="margin: 0px; padding: 0px;">0.7</span>
                    </span>
                  </p>
                </th>
              </tr>
              <tr>
                <td rowspan="10" style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">化妆品</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">面膜（片装）&lt;15元/片</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">0</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">11.2</td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">面膜（片装）&gt;=15元/片</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">15</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">25.5</td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">护肤品（非片装面膜）&lt;10元/g或&lt;10元/ml</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">0</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">11.2</td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">护肤品（非片装面膜）&gt;=10元/g或&gt;=10元/ml</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">15</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">25.5</td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">化妆品/彩妆（片装）&lt;15元/片</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">0</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">11.2</td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">化妆品/彩妆（片装）&gt;=15元/片</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">15</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">25.5</td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">化妆品/彩妆（非片装）&lt;10元/g或&lt;10元/ml</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">0</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">11.2</td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">化妆品/彩妆（非片装）&gt;=10元/g或&gt;=10元/ml</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">15</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">25.5</td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">香水&lt;10元/ml</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">0</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">11.2</td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">香水&gt;=10元/ml</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">16</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">15</td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">25.5</td>
              </tr>
              <tr>
                <td rowspan="3" style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">个护</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">洗发水</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">16</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">0</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">11.2</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">沐浴露</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">16</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">0</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">11.2</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">牙膏</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">16</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">0</span>
                  </p>
                </td>
                <td style="border-style: solid; border-color: rgb(234, 234, 234); text-align: center; padding: 5px 10px; white-space: nowrap;">
                  <p style="margin: 0px; padding: 0px;">
                    <span style="margin: 0px; padding: 0px;">11.2</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

      </el-col>
      <el-col :xs="0" :sm="1" :md="3" :lg="5" :xl="6">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" >
</style>