# NodeJS Installation Guide

## MacOS

Open Terminal

> :bulb: Remember: you can open Terminal from the Spotlight tool
> (`⌘` + `Space`)
> search for Terminal or you can open Terminal from the Applications folder with `Terminal.app`, it may be in the `Utilities` folder

Paste this command in Terminal and hit `[Enter]`.

```sh
# To make sure you have the latest version go to 
# https://github.com/nvm-sh/nvm#install--update-script
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

The above command will download and install Node Version Manager (NVM) or update NVM if you already have it installed.

Enter the command below which will download the Long-Term Support (stable) version of NodeJS and set it as your default NodeJS version.

```sh
nvm install --lts

# optionally update npm while you're here
nvm install-latest-npm
```

### Common Issues

You might see an error like `command not found: nvm` and this is because the terminal does not know where `nvm` is, even though you have installed it.

Close your terminal and re-open it and type `nvm --version` and if you still get the same error then add the following lines of code to your `~/.zshrc` file if it exists.

If the file does not exist, run `touch ~/.zshrc` which will create the file.

Run `code ~/.zshrc` and copy and paste the code snippet below which will tell your terminal where to find the `nvm` command:

```text
# this tells the terminal where the `.nvm` folder is
export NVM_DIR="$HOME/.nvm"

# This loads nvm from that directory
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  

# This loads nvm bash_completion which lets you press tab to autocomplete commands
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Enter the command `node --version` which will print out the current version of NodeJS (it should be something like 18.xx.x)

All done!!

## Windows

Go to [Node JS](https://nodejs.org/)

Select the LTS version (it should be something like 18.xx.x)

Once the download is complete follow the steps from the installer

After the installation is successful, open your terminal and enter the command `node --version` which will print out the current version of NodeJS (should be something like 18.x.x)

All done!!
