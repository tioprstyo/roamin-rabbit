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
    "stg")
        BASE_URL="https://stg.roamin-rabbit.com"
        ;;
    "dev")
        BASE_URL="https://dev.roamin-rabbit.com"
        ;;
    *)
        echo "Invalid environment"
        exit 1
        ;;
esac

case $environment in
    "prod")
        ENV_NAME=".production"
        ;;
    "stg")
        ENV_NAME=".staging"
        ;;
    "dev")
        ENV_NAME=".development"
        ;;
    *)
        echo "Invalid environment"
        exit 1
        ;;
esac

cat <<EOF >.env${ENV_NAME}
REACT_APP_BASE_URL: ${BASE_URL}
EOF

echo "Environment changed to $environment"