
interface Result {
  success: boolean;
  code: string;
  timestamp: Date;
  message?: string;
  data?: any;
}

const result = (err?: string | null, data?: any) => {
  let res: Result = {
    success: !err,
    code: err ? '0' : '1',
    timestamp: new Date()
  }
  if (err) {
    res.message = err;
  } else {
    if (data) {
      res.data = data;
    }
  }
  return res
}
export default result
