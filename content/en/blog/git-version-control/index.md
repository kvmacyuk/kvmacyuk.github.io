---
title: Version Control. Git
summary: Basics of the Git version control system — commands, core principles, and best practices
date: 2026-03-14

authors:
  - me

tags:
  - Git
  - Programming
  - DevOps
---

## Purpose of Git

**Git** is a distributed version control system created by Linus Torvalds in 2005. Its primary functions are tracking code changes, enabling collaborative work, and providing the ability to revert to previous project states.

## Key Concepts

### Repository

A repository is a project directory containing all files and their full change history. It exists in two forms:

- **Local** — stored on the developer's machine
- **Remote** — hosted on a server (GitHub, GitLab, Bitbucket)

### Commit

A commit captures the state of a project at a specific point in time. It includes:

- A unique hash identifier
- A message describing the changes
- Author information
- A reference to the parent commit

### Branches

A branch is an isolated line of development. It allows parallel work on multiple tasks without conflicts. The main branch is traditionally named `main` or `master`.

## Command Reference

### Initialization and Setup

```bash
# Create a new repository
git init

# Clone an existing repository
git clone <url>

# Set user name and email
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

### Recording Changes

```bash
# Current state of the working directory
git status

# Stage files
git add <file>
git add .  # all modified files

# Save a snapshot
git commit -m "Description of changes"

# View commit history
git log
git log --oneline
```

### Branching and Merging

```bash
# Create a branch
git branch <branch-name>

# Switch to a branch
git checkout <branch-name>

# Create and switch in one command
git checkout -b <branch-name>

# Merge branches
git merge <branch-name>
```

### Synchronizing with a Server

```bash
# Link a remote repository
git remote add origin <url>

# Push changes to the server
git push origin <branch>

# Pull changes from the server
git pull origin <branch>

# Fetch without automatic merging
git fetch
```

## Standard Workflow

1. **Create a branch** — isolate a new task
2. **Make changes** — implement the functionality
3. **Commit** — save with a meaningful message
4. **Push** — upload the branch to the remote repository
5. **Propose changes** — open a Pull Request
6. **Merge** — integrate into the main branch after review

## Best Practices

- Record changes in **small, atomic commits**
- Write **informative commit messages**
- Develop new features in **separate branches**
- Run `pull` regularly to **keep the local copy up to date**
- Exclude **confidential data** from tracking (.env, keys, passwords)

## Conclusion

Git is a fundamental tool in every developer's toolkit. Mastery of basic commands accelerates individual work and simplifies team collaboration. It is advisable to begin with standard operations and gradually explore more advanced features.
