# Git/Github: Pushing, Pulling, and Cloning


## Getting setup on Github with SSH

### Creating new SSH key locally:
* Open a terminal:
    * Windows: Use Git Bash.
    * Mac/Linux: Use the default terminal.
* Run ssh-keygen -t ed25519 -C "your_email@example.com" and press Enter.
* Choose a file location or press Enter to use the default location.
* Enter a passphrase and confirm it (or leave it empty for no passphrase).

### Setting up SSH on GitHub:
* Copy the SSH key to the clipboard:
    * Windows: Run clip < ~/.ssh/id_ed25519.pub in Git Bash.
    * Mac: Run pbcopy < ~/.ssh/id_ed25519.pub in the terminal.
    * Linux: Run xclip -sel clip < ~/.ssh/id_ed25519.pub in the terminal.
* Go to your GitHub account settings and select "SSH and GPG keys."
* Click "New SSH key," enter a title, paste your key, and click "Add SSH key."

### SSH vs HTTPS on GitHub:
* SSH: Secure, key-based authentication, no need to enter username/password each time. Requires initial setup.
* HTTPS: Less secure, requires entering username/password for each push/pull. Easier to set up initially.

## Using Git and remote repositories

### Creating local repo:
* Open a terminal and navigate to the project directory.
* Run git init to initialize a new Git repository.

### Adding to local repo:
* Run git status to check the status of your repository.
* Run git add . to add all changes in the current directory to the staging area.

### Committing changes to local repo:
* Run git commit -m "Your commit message" to commit the staged changes with a descriptive message.

### Creating repo on Github:
* Create a new repository on Github through the web interface.
* Run git remote add origin git@github.com:username/repo.git to add the remote repository (named "origin") with the SSH URL.

### Pushing changes to Github:
* Run git push -u origin main to push the local changes to the "main" branch of the remote repository. The -u flag sets the upstream for easier future pushes.

### Pulling repositories:
* Run git fetch to fetch updates from the remote repository without merging them.
* Run git pull to fetch updates from the remote repository and merge them with the local branch.

### Cloning repositories:
* Navigate to the desired parent directory for the cloned repository.
* Run git clone git@github.com:username/repo.git to clone the remote repository to your local machine using its SSH URL.
