environment="dev"

while getopts "e:" opt; do
  case $opt in
    e) environment="$OPTARG";;
    \?) echo "Invalid option -$OPTARG" >&2;;
  esac
done

case $environment in
    "prod")
        BASE_URL="https://roamin-rabbit.com"
        ;;
    "dev")
        BASE_URL="https://stoplight.io/mocks/roamin-rabbit/roaming-rabbit-api/19100496"
        ;;
    *)
        echo "Invalid environment"
        exit 1
        ;;
esac

cat <<EOF >.env
REACT_APP_BASE_URL=${BASE_URL}
EOF

echo "Environment changed to $environment"