### Configuring Git
1. **Initialize a Git repository:**
   ```bash
   git init
   ```

2. **Set your name and email:**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your@example.com"
   ```

### Basic Git Workflow
3. **Clone a repository:**
   ```bash
   git clone <repository_url>
   ```

4. **Check the status of your repository:**
   ```bash
   git status
   ```

5. **Add changes to the staging area:**
   ```bash
   git add <filename>
   ```

6. **Add all changes to the staging area:**
   ```bash
   git add .
   ```

7. **Commit changes:**
   ```bash
   git commit -m "Your commit message"
   ```

8. **Commit changes with an interactive message editor:**
   ```bash
   git commit
   ```

### Branching and Merging
9. **Create a new branch:**
   ```bash
   git branch <branch_name>
   ```

10. **Switch to a branch:**
    ```bash
    git checkout <branch_name>
    ```

    or, with Git version 2.23 and later:
    ```bash
    git switch <branch_name>
    ```

11. **Create and switch to a new branch:**
    ```bash
    git checkout -b <branch_name>
    ```

    or, with Git version 2.23 and later:
    ```bash
    git switch -c <branch_name>
    ```

12. **Merge branches:**
    ```bash
    git merge <branch_name>
    ```

### Remote Repositories
13. **Add a remote repository:**
    ```bash
    git remote add origin <repository_url>
    ```

14. **Push changes to a remote repository:**
    ```bash
    git push -u origin <branch_name>
    ```

15. **Pull changes from a remote repository:**
    ```bash
    git pull origin <branch_name>
    ```

### Checking History and Differences
16. **View commit history:**
    ```bash
    git log
    ```

17. **Show changes between commits:**
    ```bash
    git diff <commit_hash1> <commit_hash2>
    ```

18. **Show changes in the staging area:**
    ```bash
    git diff --staged
    ```

### Undoing Changes
19. **Discard changes in working directory:**
    ```bash
    git checkout -- <filename>
    ```

20. **Undo the last commit (keep changes in working directory):**
    ```bash
    git reset HEAD^
    ```

21. **Undo the last commit (discard changes in working directory):**
    ```bash
    git reset --hard HEAD^
    ```

These are some fundamental Git commands. Depending on your workflow and needs, you might use additional commands and options. The Git documentation is a valuable resource for more in-depth information.