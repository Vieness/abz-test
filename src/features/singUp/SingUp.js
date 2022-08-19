import {useEffect, useState} from 'react';
import {Box, Button, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import {useGetPositionsQuery, useSingUpUserMutation} from "./singUpApi";

const SingUp = () => {
  const [singUpUser, {error, isSuccess}] = useSingUpUserMutation()
  const {data = []} = useGetPositionsQuery()
  const [errors, setErrors] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position_id: undefined,
    photo: null
  })

  useEffect(() => {
    setErrors(error?.data?.fails)
  }, [error])

  useEffect(() => {
    setErrors(null)
    setForm({
      name: '',
      email: '',
      phone: '',
      position_id: undefined,
      photo: null
    })
  }, [isSuccess])

  const handleChange = ({target: {name, value}}) => {
    setErrors({...errors, [name]: undefined})
    setForm({...form, [name]: value})
  }


  const handleSubmit = () => {
    let formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('position_id', form.position_id)
    formData.append('photo', form.photo)
    singUpUser(formData)
  }

  const validate = (file) => {
    console.log(file.size)
    if (file.size >= 5120000) {
      console.log("Not greater 5MB")
      return false
    }

    if (!file.name.endsWith('.jpeg') && !file.name.endsWith('.jpg')) {
      console.log('Not a photo')
      return false
    }
    return true
  }

  const selectFile = (name, target) => {
    if (!target.files.length) {
      setForm((form) => ({
        ...form, [name]: undefined
      }))
      return
    }
    if (validate(target.files[0])) {
      setForm((form) => ({
        ...form, [name]: target.files[0]
      }))
    }
  }

  return (
    <Grid align={'center'} id={'sing-up-section'}>
      <Typography sx={{mt: 15, mb: 6}} variant={'h3'}>
        Working with POST request
      </Typography>
      <Box sx={{maxWidth: 400}}>
        <Box sx={{mb: 5}}>
          <TextField
            error={Boolean(errors?.name)}
            value={form.name}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your name"
            name="name"
            autoComplete="name"
            autoFocus
            color={'common'}
            helperText={errors?.name}
          />
        </Box>
        <Box sx={{mb: 5}}>
          <TextField
            error={Boolean(errors?.email)}
            value={form.email}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            color={'common'}
            helperText={errors?.email}
          />
        </Box>
        <Box>
          <TextField
            error={Boolean(errors?.phone)}
            value={form.phone}
            onChange={handleChange}
            type={'text'}
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            autoFocus
            color={'common'}
            helperText={errors?.phone}
          />
          <Typography variant={'subtitle2'} color={'common'} align={"left"}>
            +38 (xxx) xxx - xx - xx
          </Typography>
        </Box>
        <RadioGroup
          name={'position_id'}
          align={'left'}
          disabled
          sx={{mt: 5, mb: 5}}
          value={form.position_id}
          onChange={handleChange}
        >
          <Typography>
            Select your position
          </Typography>
          {errors?.position_id &&
            <Typography sx={{color: 'theme.error.main'}}>
              {errors?.position_id}
            </Typography>}
          {data.map((position) => {
            return (
              <FormControlLabel
                key={position?.id}
                value={position?.id}
                control={<Radio color={'blueMain'}/>}
                label={position?.name}
              />
            )
          })
          }

        </RadioGroup>
        <Box align={'left'}>
          <Button
            color={'common'}
            variant="upload"
            component="label"
            sx={{border: 1}}
          >
            Upload
            <input onChange={({target}) => selectFile('photo', target)} hidden accept="image/*" multiple type="file"/>
          </Button>
          <TextField
            sx={{
              '& fieldset': {
                paddingLeft: (theme) => theme.spacing(2.5),
                borderRadius: '0px',
                borderTopRightRadius: '7px',
                borderBottomRightRadius: '7px'
              }
            }}
            disabled
            variant={'outlined'}
            helperText={errors?.photo}
            placeholder={'Enter your photo'}
            value={form.photo?.name}
          />
        </Box>
      </Box>
      <Button onClick={handleSubmit} sx={{mt: 5, mb: 5}} variant={'main'}>
        SingUp
      </Button>
    </Grid>
  );
};

export default SingUp;