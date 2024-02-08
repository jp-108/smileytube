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

### Check username and email
22. **Check username:**
    ```bash
    git config user.name
    ```

23. **Check email:**
    ```bash
    git config user.name
    ```


Here are the additional useful Git commands in Markdown format:


# Additional Useful Git Commands

## Viewing Information:

1. **View Git configuration:**
   ```bash
   git config --list
   ```

2. **Show information about remotes:**
   ```bash
   git remote -v
   ```

## Branching and Merging:

3. **List all branches (local and remote):**
   ```bash
   git branch -a
   ```

4. **Delete a local branch:**
   ```bash
   git branch -d <branch_name>
   ```
   To force delete:
   ```bash
   git branch -D <branch_name>
   ```

5. **Rename a branch:**
   ```bash
   git branch -m <new_branch_name>
   ```

6. **Abort a merge:**
   ```bash
   git merge --abort
   ```

## Stashing Changes:

7. **Stash changes:**
   ```bash
   git stash
   ```

8. **List stashes:**
   ```bash
   git stash list
   ```

9. **Apply the latest stash:**
   ```bash
   git stash apply
   ```

## Logging and Diffs:

10. **Show a specific commit:**
    ```bash
    git show <commit_hash>
    ```

11. **Show the changes between two commits:**
    ```bash
    git diff <commit_hash1> <commit_hash2>
    ```

12. **Show the last n commits:**
    ```bash
    git log -n <number_of_commits>
    ```

## Undoing Changes:

13. **Revert a commit (creates a new commit):**
    ```bash
    git revert <commit_hash>
    ```

14. **Reset the current branch to a specific commit:**
    ```bash
    git reset --hard <commit_hash>
    ```

## Working with Tags:

15. **List tags:**
    ```bash
    git tag
    ```

16. **Create a lightweight tag:**
    ```bash
    git tag <tag_name>
    ```

17. **Create an annotated tag:**
    ```bash
    git tag -a <tag_name> -m "Tag message"
    ```

## Submodules:

18. **Initialize submodules:**
    ```bash
    git submodule init
    ```

19. **Update submodules to the latest commit:**
    ```bash
    git submodule update
    ```

## Collaboration:

20. **Create a pull request (if using GitHub or GitLab):**
    After pushing a new branch to the remote, go to the repository's website and create a pull request.

21. **Fetch changes from a remote repository:**
    ```bash
    git fetch origin
    ```

22. **Cherry-pick a commit from another branch:**
    ```bash
    git cherry-pick <commit_hash>
    ```

