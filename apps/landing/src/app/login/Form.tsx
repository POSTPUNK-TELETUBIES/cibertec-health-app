'use client'
import { Box, Button, Stack, TextField } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import { createClient } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'
import { useContext } from "react"
import { supabaseContext } from "@/providers/SupabaseProvider"

interface LoginDto{
  username: string;
  password: string;
}

export const Form  = ()=>{
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginDto>()

  const supabaseCLient = useContext(supabaseContext)

  const { mutateAsync } = useMutation({
    mutationFn: async (variables: LoginDto)=>{
      const { error, data } = await supabaseCLient.auth.signInWithPassword({
        email: variables.username,
        password: variables.password
      })

      if(error)
        throw error

      return data
    }
  })

  const onSubmit: SubmitHandler<LoginDto> = async (data) => {
    const { session } = await mutateAsync(data)

    console.log(session)
  }

  return(
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField {...register('username')} />
        <TextField {...register('password')} type="password" />
      </Stack>
      <Button 
        variant="contained" 
        type="submit" 
        color="primary" 
      >
        Ingresar 
      </Button>
    </Box>
  )
}
