<template>
  <div class="login">
    <div class="relative">
      <div class="left">
        <el-row>
          <el-col :span="24">
            <div class="homepageLogo">
              <ul>
                <li>
                  <el-image
                    style="width: 50px; height: 50pxpx"
                    :src="url"
                    fit="fill"
                  />
                </li>
                <li>
                  <span>耶嘿</span>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-image class="boxbg" :src="boxbg" fit="fill" />
            <p class="p1">歡迎使用本系統</p>
            <p class="p2">開箱即用 / 中後台管理系統</p>
          </el-col>
        </el-row>
      </div>
      <div class="right">
        <el-row>
          <el-col :span="24">
            <h2 class="login_h2">登入</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form
              :model="form"
              label-width="120px"
              lable-position="top"
              size="large"
              class="form"
              :rules="rules"
              ref="ruleFormRef"
            >
              <el-form-item label="用戶名" prop="userName">
                <el-input v-model="form.userName" />
              </el-form-item>
              <el-form-item label="密碼" prop="passWord">
                <el-input
                  v-model.number="form.passWord"
                  type="password"
                  show-password
                  @keyup.enter="OnSubmit(ruleFormRef)"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  class="submitBtn"
                  type="primary"
                  @Click="OnSubmit(ruleFormRef)"
                  >登入</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { FormInstance, FormRules } from "element-plus";
import store from "../../store/index";
import { useRouter } from "vue-router";
const router = useRouter();
const url = ref("images/logo.0606fdd2.png");
const boxbg = ref("images/svgs/login-box-bg.svg");
const form = reactive({
  userName: "",
  passWord: "",
});
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  userName: [{ required: true, message: "請輸入用戶名稱", trigger: "blur" }],
  passWord: [
    { required: true, message: "請輸入密碼", trigger: "blur", type: "number" },
  ],
});
const OnSubmit = async (ruleFormRef: FormInstance | undefined) => {
  if (!ruleFormRef) return;
  await ruleFormRef.validate(async (valid, fields) => {
    if (valid) {
      ElMessage.success("登入成功");
      store().EditUserId(1);
      router.push({ path: "/" });
    } else {
      let errors: string = "";
      fields?.userName?.forEach((element) => {
        errors += element.message + ";";
      });
      fields?.passWord?.forEach((element) => {
        errors += element.message + ";";
      });
      ElMessage.error(errors);
    }
  });
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;

  .relative {
    width: 100%;
    height: 100%;
    text-align: center;

    .left {
      width: 50%;
      height: 100%;
      float: left;
      // background-image: url('/images/svgs/login-bg/svg');
      background-color: cadetblue;

      .boxbg {
        width: 350px;
        height: 350px;
        margin-top: 100px;
      }

      .homepageLogo {
        height: 50px;
        line-height: 50px;
        margin-top: 40px;
      }
    }

    .right {
      width: 50%;
      height: 100%;
      float: right;

      .el-row {
        // width: 50%;
        // height: 50%;
        // margin-top: 40px;
        .login_h2 {
          margin-top: 35%;
          text-align: center;
        }
        .form {
          // margin-left: 100px;
          // margin-right: 100px;
          // margin-bottom: 30px;
          margin: 10px 200px 0px 150px;
          text-align: center;
        }
      }
    }
  }
}
</style>
