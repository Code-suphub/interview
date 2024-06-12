/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install yarn,node@22.2.0

node -v  
npm -v

echo 'export PATH="//opt/homebrew/Cellar/node/22.2.0/bin:$PATH"' >> ~/.zshrc

yarn install