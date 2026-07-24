type ButtonProps = {
  texto: string;
};

function Button({ texto }: ButtonProps) {
  return (
    <button>
      {texto}
    </button>
  );
}

export default Button;