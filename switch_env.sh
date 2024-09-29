environment="dev"

while getopts "e:" opt; do
  case $opt in
    e) environment="$OPTARG";;
    \?) echo "Invalid option -$OPTARG" >&2;;
  esac
done

case $environment in
    "prod")
        BASE_URL="http://api.roaminrabbit.com"
        ;;
    "staging")
        BASE_URL="https://dev-api.roaminrabbit.com/api/v1"
        ;;
    "dev")
        BASE_URL="https://e148-2001-448a-5102-3ab-c01-3cf8-d989-9ad3.ngrok-free.app/api/v1"
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