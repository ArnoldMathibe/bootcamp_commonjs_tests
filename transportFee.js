export default function transportFee(shift)
{
  if(shift == 'Morning')
  {
    return 'R20'
  }else if(shift === 'Afternoon')
  {
    return "R10"
  }else if(shift == 'Nightshift')
  {
    return 'free'
  }
}