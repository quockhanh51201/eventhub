import { ArrowCircleRight2, Data, Lock, Personalcard, Sms } from 'iconsax-react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoadingModal } from '../../Modals'
import authenticationAPI from '../../api/authApi'
import { ButtonComponents, RowComponents, SectionComponents, SpaceComponents, TextComponents, TextInputComponents } from '../../components'
import ContainerComponents from '../../components/ContainerComponents'
import { appColor } from '../../constants/appColors'
import { addAuth } from '../../redux/reducers/authReducer'
import showToastMsg from '../../utils'
import { Validate } from '../../utils/validate'
import SocialLogin from './components/SocialLogin'
import asyncStorage from '../../utils/asyncStorage/asyncStorage'
import { appStorage } from '../../constants/appStorage'


const initState = {
  useName: '',
  email: '',
  pass: '',
  confirmPass: '',
}
const SignUpScreen = ({ navigation }: any) => {
  const [values, setValues] = useState(initState)
  const [isLoading, setIsLoading] = useState(false)


  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values }
    data[`${key}`] = value
    setValues(data)
  }
  const handleRegister = async () => {
    const { useName, email, pass, confirmPass } = values
    const emailValidate = Validate.Email(email)
    const passValidate = Validate.Password(pass)
    if (useName && email && pass && confirmPass) {
      // check vaildate email
      if (!emailValidate) {
        showToastMsg({
          message: 'Nhập sai định dạng email!',
          type: 'danger',
          icon: 'warning'
        })
        return
      }
      // check pass Khanh123
      if (!passValidate) {
        showToastMsg({
          message: 'Pass cần 8 kí tự: số, viết thường và viết hoa!',
          type: 'danger',
          icon: 'warning'
        })
        return
      }
      // check comfirm pass
      if (confirmPass !== pass) {
        showToastMsg({
          message: 'Comfirm Password không giống Password!',
          type: 'danger',
          icon: 'warning',
        })
        return
      }

      setIsLoading(true)
      try {
        const res = await authenticationAPI.HandleAuthantication(
          '/verification',
          { email: values.email },
          'post'
        )
        navigation.navigate('VerificationScreen', {
          res,
          values
        })
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    } else {
      showToastMsg({
        message: 'Vui lòng nhập đầy đủ thông tin!',
        type: 'danger',
        icon: 'warning'
      })
    }
  }

  return (
    <ContainerComponents isImageBackground isScroll back>
      <SectionComponents>
        <TextComponents text='Sign up' size={24} title />
        <SpaceComponents height={21} />
        <TextInputComponents
          value={values.useName}
          onChange={val => handleChangeValue('useName', val)}
          placeHolder='Full name'
          affix={
            <Personalcard size={22} color={appColor.gray} />
          }
          allowClear
        />
        <SpaceComponents height={19} />
        <TextInputComponents
          value={values.email}
          onChange={val => handleChangeValue('email', val)}
          placeHolder='abc@gmail.com'
          affix={
            <Sms size={22} color={appColor.gray} />
          }
          allowClear
          keyboardType='email-address'
        />
        <SpaceComponents height={19} />
        <TextInputComponents
          value={values.pass}
          onChange={val => handleChangeValue('pass', val)}
          placeHolder='Your Password'
          isPassword
          affix={
            <Lock size={22} color={appColor.gray} />
          }
        />
        <SpaceComponents height={19} />
        <TextInputComponents
          value={values.confirmPass}
          onChange={val => handleChangeValue('confirmPass', val)}
          placeHolder='Comfirm Password'
          isPassword
          affix={
            <Lock size={22} color={appColor.gray} />
          }
        />
      </SectionComponents>

      <SpaceComponents height={36} />

      <SectionComponents styles={{ paddingHorizontal: 48 }}>
        <ButtonComponents
          onpress={() => handleRegister()}
          text='SIGN UP'
          type='primary'
          icon={
            <ArrowCircleRight2
              size="22"
              color={appColor.white}
              variant="TwoTone"
            />
          }
          iconFlex='right' />
      </SectionComponents>

      <SpaceComponents height={24} />

      <SocialLogin />

      <SpaceComponents height={20} />

      <SectionComponents>
        <RowComponents
          justify='center'
        >
          <TextComponents
            text="Don't have an account ?"
          />
          <SpaceComponents width={2} />
          <ButtonComponents
            text='Sign In'
            type='link'
            onpress={() => navigation.navigate('LoginScreen')}
          />
        </RowComponents>
      </SectionComponents>
      <LoadingModal visible={isLoading} />
    </ContainerComponents>
  )
}

export default SignUpScreen