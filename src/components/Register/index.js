import Button from "@/components/Button";

const REGISTER_ENABLED = !!+process.env.NEXT_PUBLIC_REGISTER_ENABLED;
const REGISTER_LINK = process.env.NEXT_PUBLIC_REGISTER_LINK;

const Register = (props) => (
  <Button {...props} as="a" href={REGISTER_LINK} variant="outline">
    {REGISTER_ENABLED ? "Register now" : "Registration closed"}
  </Button>
);

export default Register;
