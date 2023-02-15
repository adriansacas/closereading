# get git config
config:
	git config -l

# get git log
CloseReading.log.txt:
	git log > CloseReading.log.txt

clean:
	rm -f *.tmp

# get git status
status:
	make clean
	@echo
	git branch
	git remote -v
	git status

# download files from the IDB code repo
pull:
	make clean
	@echo
	git pull
	git status

all: