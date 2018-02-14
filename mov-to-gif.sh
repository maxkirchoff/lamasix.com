if [[ $# -eq 0 ]]; then
  echo "please provide a file to convert"
  exit 1;
else
  ffmpeg -i $1 -pix_fmt rgb24 -r 3 $1.gif
fi
